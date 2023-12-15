import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div
        className="
        bg-very-dark-blue-card-bg absolute 
        top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]
        w-[21em] h-[33em]
        rounded-2xl p-2
        "
      >
        <div className="flex flex-col items-center mt-2">
          <Image
            className="rounded-xl relative z-0"
            src="/image-equilibrium.jpg"
            width={300}
            height={270}
            alt="image-equilibrium"
            loading="lazy"
          />
          <div className="absolute flex justify-center items-center opacity-0 hover:opacity-40 focus:opacity-40 w-[300px] h-[300px] rounded-xl bg-cyan z-10">
            <Image
              src="/icon-view.svg"
              width={40}
              height={40}
              alt="view-icon"
            />
          </div>
        </div>
        <div className="mx-5 my-2 z-0">
          <h1 className="text-xl hover:text-cyan focus:text-cyan">
            Equilibrium #3429
          </h1>
          <p className="text-md text-soft-blue ">
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className="flex flex-row justify-between my-2">
            <div className="text-md text-cyan flex my-2">
              <Image
                src="/icon-ethereum.svg"
                className="mx-1"
                width={14}
                height={8}
                alt="etherium-icon"
              />
              <h3 className="mt-1">0.041 ETH</h3>
            </div>
            <div className="text-md flex my-2">
              <Image
                src="/icon-clock.svg"
                width={22}
                className="mx-1"
                height={16}
                alt="clock-icon"
              />
              <h3 className="mt-1 text-soft-blue">3 days left</h3>
            </div>
          </div>
          <hr className="border-very-dark-blue-line" />
          <div className="text-md flex my-3 text-soft-blue">
            <Image
              src="/image-avatar.png"
              className="border-white mx-1"
              width={36}
              height={36}
              alt="avatar-image"
            />
            <h1 className="ml-4 my-2">
              Creation of{' '}
              <span className="text-white hover:text-cyan focus:text-cyan">
                Julius Wyvern
              </span>{' '}
            </h1>
          </div>
        </div>
      </div>
    </main>
  )
}
