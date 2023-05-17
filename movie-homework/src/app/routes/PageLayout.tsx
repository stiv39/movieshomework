import { useOutlet } from 'react-router-dom'
import { PageContainer, ReduxPageHeaderContainer } from '../components/containers'

export const PageLayout: React.FC = () => {
  const outlet = useOutlet()

  return (
    <PageContainer>
      <ReduxPageHeaderContainer />
      {outlet}
    </PageContainer>
  )
}
