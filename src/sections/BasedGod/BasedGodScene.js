import Scene from "../../components/Scene";
import BasedGod from "./BasedGod";

const Wrapper = (props) => (
    <Scene
      camera={{ position: [3, 3, 7], far: 50 }}
      lights={[
        <pointLight key="light-1" castShadow position={[1, 0, 1]} />,
        <ambientLight key="light-2" raycast />,
      ]}
      {...props}
    >
      <BasedGod scale={2} position={[0, 0.5, 0]} />
    </Scene>
);

export default Wrapper;
