import { ContentSectionProps } from '../../types/types'
import styles from './style.module.css'

const ContentSection:React.FC<ContentSectionProps> = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default ContentSection
