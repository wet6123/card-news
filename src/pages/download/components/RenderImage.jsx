import { Spin } from "antd";

const RenderImage = (text, loading, image) => {
  if (loading === "waiting") {
    return (
      <div className="h-80 flex items-center justify-center bg-gray-100">
        <p>대기 중...</p>
      </div>
    );
  }

  if (loading === "generating") {
    return (
      <div className="h-80 flex items-center justify-center bg-gray-100">
        <Spin spinning={true} tip="이미지 생성 중...">
          <div className="w-28"></div>
        </Spin>
      </div>
    );
  }

  if (image) {
    return (
      <img
        src={image}
        alt={`Generated from: ${text}`}
        className="w-full h-80 object-cover rounded"
      />
    );
  }

  return (
    <div className="h-80 flex items-center justify-center bg-gray-100">
      <p>이미지 생성 실패</p>
    </div>
  );
};

export default RenderImage;
