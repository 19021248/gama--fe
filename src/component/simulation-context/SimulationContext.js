// create frame for a react context component
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
export const SimulationContext = React.createContext();

export const SimulationConsumer = SimulationContext.Consumer;

export const useSimulationContext = () => useContext(SimulationContext);

export const SimulationProvider = ({ children }) => {
  const [framerate, setFramerate] = useState();
  const [numberOfSimulation, setNumberOfSimulation] = useState();
  const [selectedResearch, setSelectedResearch] = useState(null);
  return (
    <SimulationContext.Provider
      value={{
        framerate,
        setFramerate,
        numberOfSimulation,
        setNumberOfSimulation,
        selectedResearch,
        setSelectedResearch,
      }}
    >
      {children}
    </SimulationContext.Provider>
  );
};
