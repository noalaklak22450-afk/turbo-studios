import fetch from 'node-fetch';

export default async (req, res) => {
  try {
    const response = await fetch('https://games.roblox.com/v1/games/15542502077/game-details');
    const data = await response.json();
    res.status(200).json({
      visits: data.visits || 234,
      likes: data.favoritedCount || 'N/A',
      players: data.playing || 'N/A'
    });
  } catch (error) {
    res.status(500).json({ 
      error: "Failed to fetch Roblox data",
      visits: 234 // Your known visit count
    });
  }
};
