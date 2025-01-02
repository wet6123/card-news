import { useState } from "react";
import { Input, Button, Typography, Radio, Spin, message } from "antd";
import { useNavigate } from "react-router-dom";
import { postSummary } from "../../api/axios/generate";

const { TextArea } = Input;
const { Title } = Typography;
const options = [
  { label: "Realistic", value: "realistic" },
  { label: "None", value: "none" },
];

const CreateIndex = () => {
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [imageType, setImageType] = useState("realistic");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!data.trim()) {
      message.warning("내용을 입력해주세요");
      return;
    }

    try {
      setLoading(true);
      const response = await postSummary({
        style: imageType,
        data: data,
      });

      navigate("/download", {
        state: { data: response.data, imageType: imageType },
      });
    } catch (error) {
      console.error("Error:", error);
      message.error("뉴스를 요약하는 중에 오류가 발생했습니다");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Spin spinning={loading} tip="뉴스를 요약하는 중..." fullscreen></Spin>
      <div className="h-208 flex flex-col justify-center mx-auto max-w-5xl">
        <div className="max-w-5xl">
          <Title level={3}>본문 입력</Title>
          <p>카드뉴스로 만들 내용을 입력해주세요.</p>
          <p>입력된 문장은 4줄로 요약되어 카드뉴스 내용을 사용됩니다.</p>
        </div>
        <TextArea
          showCount
          maxLength={1000}
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="카드뉴스 내용을 입력해주세요."
          className="h-80 resize-none mt-5 mb-10 max-w-5xl"
        />
        <div className="max-w-5xl">
          <Title level={3}>이미지 타입</Title>
          <p>요약된 뉴스 내용으로 이미지를 생성합니다.</p>
          <p>생성할 이미지의 타입을 선택해주세요.</p>
        </div>
        <div className="mt-5 mb-10 max-w-lg">
          <Radio.Group
            block
            options={options}
            value={imageType}
            onChange={(e) => setImageType(e.target.value)}
            optionType="button"
            buttonStyle="solid"
          />
        </div>
        <div className="flex justify-end max-w-5xl">
          <Button onClick={handleSubmit} type="primary">
            생성하기
          </Button>
        </div>
      </div>
    </>
  );
};

export default CreateIndex;
