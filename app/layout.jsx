import '@styles/globals.css'

import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
    tittle: 'promptopia',
    description: 'Discover & share AI prompts'
}

const RootLayout = ({children}) => {
  return (
    <html>
        <body>
            <Provider>
                <div className="main">
                    <div className="gradient"></div>
                </div>
                <main className="app">
                    <Nav />
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout;