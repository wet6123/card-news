import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { postImage } from "../../api/axios/generate";
import RenderImage from "./components/RenderImage";
import { Button, Typography } from "antd";
import html2canvas from "html2canvas";
import JSZip from "jszip";

const { Title } = Typography;

const DownloadIndex = () => {
  const location = useLocation();
  const { stringNum, strings } = location.state?.data;
  const { imageType } = location.state;
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState({});

  useEffect(() => {
    const generateImages = async () => {
      if (!stringNum) return;

      const initialLoading = {};
      for (let i = 0; i < stringNum; i++) {
        initialLoading[i] = "waiting";
      }
      setLoading(initialLoading);

      await Promise.all(
        Array.from({ length: stringNum }, async (_, i) => {
          setLoading((prev) => ({ ...prev, [i]: "generating" }));
          try {
            const response = await postImage({
              text: strings[i],
              style: imageType,
            });
            setImages((prev) => ({ ...prev, [i]: response.data.imageUrl }));
          } catch (error) {
            console.error(`Error generating image for "${strings[i]}":`, error);
          }
          setLoading((prev) => ({ ...prev, [i]: "finished" }));
        })
      );
    };

    generateImages();
  }, [strings]);

  const downloadImages = async () => {
    const zip = new JSZip();
    const promises = [];

    for (let i = 0; i < strings?.length; i++) {
      const card = document.getElementById(`card-${i}`);
      if (!card) continue;

      const promise = html2canvas(card, {
        backgroundColor: "white",
        scale: 2,
      }).then((canvas) => {
        return new Promise((resolve) => {
          canvas.toBlob((blob) => {
            zip.file(`card-${i + 1}.png`, blob);
            resolve();
          }, "image/png");
        });
      });

      promises.push(promise);
    }

    await Promise.all(promises);
    const content = await zip.generateAsync({ type: "blob" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(content);
    link.download = "cards.zip";
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <>
      <div className="p-8">
        <div className="flex justify-between items-center mb-4">
          <Title level={3}>생성 결과</Title>
          <Button onClick={downloadImages} type="primary">
            다운로드
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto bg-white p-4">
          {strings?.map((text, index) => (
            <div
              id={`card-${index}`}
              key={index}
              className="aspect-square bg-white rounded-lg shadow p-4 flex flex-col"
            >
              {RenderImage(text, loading[index], images[index])}
              <p className="text-lg flex-grow">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DownloadIndex;
