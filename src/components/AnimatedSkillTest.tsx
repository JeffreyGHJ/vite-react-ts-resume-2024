import TooltipTest from './TooltipTest'

const AnimatedSkillTest = ({ children, index }: any) => {
  return (
    <TooltipTest>
      <div
        tabIndex={index}
        className="relative flex items-center justify-center size-20"
      >
        <div className="text-5xl ">{children}</div>
        <div className="absolute top-0 text-5xl size-20 border-primary text-muted-foreground-2 dark:border-indigo-800 border-solid rounded-lg hover:rounded-full hover:duration-10000 hover:animate-rotate hover:direction-reverse duration-2000 transition-all ease-in-out border-[3px] cursor-pointer"></div>

        {/* <div className="absolute bottom-0 px-1 text-[9px] rounded-lg leading-[0.7] translate-y-1/2 bg-background right-[5px]">
          Unreal Engine
        </div> */}
      </div>
    </TooltipTest>
  )
}
export default AnimatedSkillTest
