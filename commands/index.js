
import { DiscordRequest } from '../utils/discord';

export async function HasGuildCommands(appId, guildId, commands) {
    console.log('running hasguildcommands', {appId, guildId, commands})
    if (guildId === '' || appId === '') return;
  
    commands.forEach((c) => HasGuildCommand(appId, guildId, c));
  }
  
async function HasGuildCommand(appId, guildId, command) {
    // API endpoint to get and post guild commands
    const endpoint = `applications/${appId}/guilds/${guildId}/commands`;
  
    try {
      const res = await DiscordRequest(endpoint, { method: 'GET' });
      const data = await res.json();
  
      if (data) {
        const installedNames = data.map((c) => c['name']);
        // This is just matching on the name, so it's not good for updates
        if (!installedNames.includes(command['name'])) {
          console.log(`Installing "${command['name']}"`);
          InstallGuildCommand(appId, guildId, command);
        } else {
          console.log(`"${command['name']}" command already installed`);
        }
      }
    } catch (err) {
      console.error(err);
    }
  }
  
  // Installs a command
export async function InstallGuildCommand(appId, guildId, command) {
    // API endpoint to get and post guild commands
    const endpoint = `applications/${appId}/guilds/${guildId}/commands`;
    // install command
    try {
        await DiscordRequest(endpoint, { method: 'POST', body: command });
    } catch (err) {
        console.error(err);
    }
}

export const TEST_COMMAND = {
    name: 'test',
    description: 'Basic guild command',
    type: 1,
};
  