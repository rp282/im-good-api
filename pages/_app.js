import '../styles/globals.css'
import {
  TEST_COMMAND,
  HasGuildCommands,
} from '../commands';

function MyApp({ Component, pageProps }) {
  HasGuildCommands(process.env.APP_ID, process.env.GUILD_ID, [TEST_COMMAND])
  return <Component {...pageProps} />
}

export default MyApp
