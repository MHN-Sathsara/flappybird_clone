# Flappy Bird Clone 🐦

A simple Flappy Bird clone built with React Native and Expo, featuring physics-based gameplay using Matter.js.

## 🎮 Current Features

### Game Mechanics

- **Physics Engine**: Built with Matter.js for realistic bird movement and collision detection
- **Tap to Jump**: Simple one-touch controls - tap anywhere to make the bird fly upward
- **Obstacle Course**: Navigate through pairs of pipes with randomized heights
- **Collision Detection**: Game ends when bird hits pipes or ground
- **Scoring System**: Earn points by successfully passing through pipe pairs
- **Auto-restart**: Score resets and game can be restarted after game over

### Technical Implementation

- **React Native Game Engine**: Smooth 60fps gameplay loop
- **Component-based Architecture**: Modular design with separate components for Bird, Obstacles, and Floor
- **Responsive Design**: Adapts to different screen sizes using React Native Dimensions
- **Matter.js Physics**: Gravity, velocity, and collision physics simulation
- **Entity System**: Clean separation of game entities and physics bodies

### Current Game Elements

- **Bird**: Black-bordered square that responds to gravity and tap controls
- **Obstacles**: Red (top) and blue (bottom) pipe pairs that move from right to left
- **Floor**: Green ground at the bottom of the screen
- **Score Display**: Large, bold score counter at the top of the screen
- **Start Button**: Green "START GAME" button to begin gameplay

## 🚀 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- Expo Go app on your mobile device (for testing)

### Getting Started

1. Clone the repository

```bash
git clone <repository-url>
cd flappybird_clone
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm start
```

4. Run on device/simulator

```bash
npm run android  # For Android
npm run ios      # For iOS
npm run web      # For web browser
```

## 📁 Project Structure

```
flappybird_clone/
├── App.js                 # Main app component and game loop
├── physics.js             # Physics engine and game mechanics
├── index.js              # Entry point
├── package.json          # Dependencies and scripts
├── app.json              # Expo configuration
├── assets/               # Images and icons
├── components/           # Game component files
│   ├── Bird.js           # Bird entity and rendering
│   ├── Floor.js          # Ground/floor component
│   └── Obstacle.js       # Pipe obstacles
├── entities/
│   └── index.js          # Game entity initialization
└── utils/
    └── random.js         # Random number generation and pipe positioning
```

## 🎯 Upcoming Improvements

### 🎨 Visual Improvements

- [ ] **Better Visuals**: Replace simple colored borders/rectangles with basic shapes or simple images
- [ ] **Background**: Add a simple gradient or solid color background instead of white
- [ ] **Smooth Bird Rotation**: Make the bird tilt slightly when jumping/falling

### 🎮 Gameplay Enhancements

- [ ] **High Score**: Track and display the best score across game sessions
- [ ] **Sound Effects**: Add simple tap/score/crash sounds using expo-av
- [ ] **Pipe Gap Consistency**: Make the gap between pipes more consistent and balanced

### 🖥️ UI Improvements

- [ ] **Game Over Screen**: Show final score and high score with better styling
- [ ] **Restart without Full Reset**: Keep entities but reset positions for smoother restart
- [ ] **Better Score Display**: Enhanced score visualization

### ⚡ Performance Tweaks

- [ ] **Smoother Physics**: Adjust gravity and jump force for better game feel
- [ ] **Better Collision Detection**: Only check collisions when bird is near pipes for optimization
- [ ] **Frame Rate Optimization**: Ensure consistent 60fps performance

## 🔧 Technical Details

### Dependencies

- **Expo**: React Native development platform
- **React Native**: Cross-platform mobile framework
- **Matter.js**: 2D physics engine for collision detection and movement
- **React Native Game Engine**: Game loop and entity management

### Game Configuration

- **Gravity**: 0.4 (adjustable in entities/index.js)
- **Bird Jump Velocity**: -5 (adjustable in physics.js)
- **Pipe Movement Speed**: 1.5 pixels per frame
- **Pipe Width**: 75 pixels
- **Bird Size**: 50x50 pixels

_Built with ❤️ using React Native and Expo_
