import fetch from 'node-fetch';

export default async (req, res) => {
  try {
    // Fetch game details from Roblox API
    const gameResponse = await fetch('https://games.roblox.com/v1/games/15542502077');
    const gameData = await gameResponse.json();
    
    // Fetch current player count
    const playersResponse = await fetch('https://games.roblox.com/v1/games/15542502077/player-count');
    const playersData = await playersResponse.json();

    res.status(200).json({
      visits: gameData.visits || 234, // Your actual visit count as fallback
      likes: gameData.favoritedCount || gameData.totalUpVotes || 0,
      players: playersData.count || 0
    });
  } catch (error) {
    // Fallback with your known stats if API fails
    res.status(200).json({
      visits: 234,
      likes: 0,
      players: 0
    });
  }
};
