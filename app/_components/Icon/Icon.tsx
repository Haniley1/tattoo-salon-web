import clsx from 'clsx'
import { getDataTest } from 'utils/data-attrs'
import { SPRITES_META } from './sprite.gen'
import styles from './styles.module.scss'
import { IIconProps, SpriteSections } from './types'

export const Icon = <T extends SpriteSections>({
  iconStyles,
  name,
  section,
  size,
  dataTestComponent,
  dataTestValue,
  dataTest,
  onClick,
}: IIconProps<T>): JSX.Element => {
  const { filePath } = SPRITES_META[section] || {}

  return (
    <svg
      className={clsx(styles[`iconSize-${size}`], iconStyles)}
      {...getDataTest({
        semantic: dataTest,
        values: dataTestValue || [
          ['section', section],
          ['name', name],
        ],
        component: dataTestComponent || 'icon',
      })}
      onClick={onClick}
    >
      <use xlinkHref={`/sprites/${filePath}#${name}`} />
    </svg>
  )
}
