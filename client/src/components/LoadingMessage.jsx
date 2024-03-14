const LoadingMessage = () => {
  return (
    <>
      <div className="flex gap-3 items-center h-64">
        <div className="bg-gray-300 rounded-full w-10 h-10"></div>
        <div className="flex flex-col gap-1">
          <div className="bg-gray-300 h-4 w-40"></div>
          <div className="bg-gray-300 h-4 w-40"></div>
        </div>
      </div>
      <div className="flex gap-3 items-center justify-end">
        <div className="flex flex-col gap-1">
          <div className="bg-gray-300 h-4 w-40"></div>
        </div>
        <div className="bg-gray-300 rounded-full w-10 h-10"></div>
      </div>
    </>
  );
};

export default LoadingMessage;
