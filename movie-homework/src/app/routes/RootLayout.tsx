import { useOutlet } from 'react-router-dom'

export const RootLayout: React.FC = () => {
  const outlet = useOutlet()

  return <>{outlet}</>
}
