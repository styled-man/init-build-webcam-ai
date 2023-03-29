import { useMemo, useState } from "react";
import Webcam from "react-webcam";
import Emoji from "./components/Emoji";
import BarGraphLine from "./components/BarGraphLine";

function App() {
    const [predictions, setPredictions] = useState({
        happy: 90,
        sad: 5,
    });

    const sortedPredictions = useMemo(() => {
        return Object.keys(predictions);
    }, [predictions]);

    return (
        <div className="grid grid-cols-2 min-h-screen">
            <div className="flex items-center justify-center border-r-4">
                <Webcam className="rounded-lg" />
            </div>

            <div>
                <Emoji>{sortedPredictions[0]}</Emoji>

                <hr className="border-b-4 w-full" />

                <div className="flex flex-col items-center justify-center gap-4 p-4">
                    {sortedPredictions.map((prediction) => (
                        <BarGraphLine
                            key={prediction}
                            emoji={prediction}
                            percentage={predictions[prediction]}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
