import { useContext, createContext, useReducer } from "react";

import { db, Collection, GetDocs, Query, OnSnapshot } from "../firebase";

export var RoadTrafficActContext = createContext();

export function useAct() {
  return useContext(RoadTrafficActContext);
}

function actReducer(state, action) {
  //console.log("inside reducer");
  switch (action.type) {
    case "fetch_cons":
      //console.log("dispatching fetch_users action");
      //console.log(action);
      return {
        ...state,
        trafficLaws: action.payload.trafficLaws,
      };
    default:
      return state;
  }
}

function ActProvider({ children }) {
  let trafficLaws = [];

  const fetchCons = async function fetchCons(payload) {
    var consArr = [];

    // const querySnapshot = await GetDocs(Collection(db, "RoadTrafficAct"));
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   var res = doc.data();
    //   consArr.push(res);
    // });

    const q = Query(Collection(db, "RoadTrafficAct"));
    const unsubscribe = OnSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var res = doc.data();
        consArr.push(res);
      });

      payload.trafficLaws = consArr;

      dispatch({
        type: "fetch_cons",
        payload: payload,
      });
    });
  };

  var [value, dispatch] = useReducer(actReducer, {
    trafficLaws,
    fetchCons,
  });

  return (
    <RoadTrafficActContext.Provider value={{ value }}>
      {children}
    </RoadTrafficActContext.Provider>
  );
}

export default ActProvider;
