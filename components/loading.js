import Image from 'next/image';

const Loading = () => {
  return (
    <Image 
      className="loading"
      src="/images/Loading.png"
      alt="Loading"
      width={100}
      height={100}
    />
  )
}

export default Loading;