import { useState } from 'react'
import TooltipTest from './TooltipTest'
import { cn } from '@/lib/utils'

const Skill = ({ index, skill }: any) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const getSkillStyle = () => {
    return isExpanded ? 'w-52 h-40' : ''
  }

  return (
    <TooltipTest>
      <div
        tabIndex={index}
        className="relative"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div
          className={cn(
            'flex flex-col w-[68.8px] p-2 gap-1  h-[68.8px] border-muted-foreground text-muted-foreground-2 dark:border-indigo-800 border-solid rounded-lg border-[3px] cursor-pointer transition-all',
            getSkillStyle()
          )}
        >
          <div className="flex w-full h-12 gap-2">
            <div
              className={
                ' transition-all duration-300 ' +
                (isExpanded ? 'text-4xl' : 'text-5xl')
              }
            >
              {skill.icon}
            </div>
            {isExpanded && (
              <div className="w-full text-base items-center justify-end flex leading-[1]">
                {skill.name}
              </div>
            )}
          </div>
          {isExpanded && (
            <div className="h-full overflow-auto text-xs leading-tight tracking-tight">
              {skill.details}
            </div>
          )}
        </div>
        {/* <div className="absolute bottom-0 px-1 text-[9px] rounded-lg font-thin leading-[0.7] translate-y-1/2 bg-background right-[5px]">
          Unreal Engine
        </div> */}
      </div>
    </TooltipTest>
  )
}
export default Skill
