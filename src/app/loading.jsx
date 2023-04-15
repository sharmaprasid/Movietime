import Image from "next/image";

const loading = () => {
  return (
    <div className="flex justify-center">
      <Image height={96} width={96} src="spinner.svg" alt="loading..." />
    </div>
  );
};

export default loading;
