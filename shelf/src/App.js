import React, {Suspense} from "react";
const RemoteApp1 = React.lazy(() => import("app1/App"));
//TODO: not lazy/async at the moment
const RemoteApp2 = import("app2/App");
/*System.import('app2/App').then(Zoo => {

  // Rendering dog
  let myDog = new Zoo.Dog('Sherlock', 'beagle');
  contentNode.innerHTML += `${myDog.bark()}`;

  // Rendering wolf
  let myWolf = new Zoo.Wolf('Direwolf');
  contentNode.innerHTML += `<br/>${myWolf.bark()}`;
});*/

const App = () => {
  return (
    <div>
      <div style={{
        margin:"10px",
        padding:"10px",
        textAlign:"center",
        backgroundColor:"gray"
      }}>
        <h1>Shelf</h1>
        <Suspense fallback={"loading..."}>
        <RemoteApp1/>
      </Suspense>
      <Suspense fallback={"loading..."}>
      <test-webcomponent/>
      </Suspense>
      </div>
    </div>)
}


export default App;
