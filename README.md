# BaseThreeFiber

BaseThreeFiber is a React-based 3D character controller project built with Three.js, React Three Fiber, and Rapier physics. It provides a foundation for creating interactive 3D experiences with animated characters in a web browser.

## Features

- 3D character controller with smooth movement and animations
- Physics-based interactions using Rapier
- Camera controls with collision detection
- Support for keyboard, touch, and gamepad inputs
- Customizable character model and animations
- Performance monitoring with r3f-perf

## Credits

This project is based on [Ecctrl](https://github.com/pmndrs/ecctrl), a character controller for React Three Fiber. Special thanks to the Ecctrl team for their excellent work.

Major packages used in this project:

- [React Three Fiber](https://github.com/pmndrs/react-three-fiber)
- [Three.js](https://github.com/mrdoob/three.js/)
- [React Three Rapier](https://github.com/pmndrs/react-three-rapier)
- [Drei](https://github.com/pmndrs/drei)
- [Leva](https://github.com/pmndrs/leva)
- [Zustand](https://github.com/pmndrs/zustand)

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/BaseThreeFiber.git
   ```

2. Install dependencies:

   ```
   cd BaseThreeFiber
   npm install
   ```

3. Run the development server:

   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to see the project in action.

## Customization

You can customize the character model, animations, and scene by modifying the components in the `src/components` directory. The main experience is set up in `src/views/Experience.tsx`.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
