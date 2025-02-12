import AIO from "./AIO";
import Automobiles from "./Automobiles";
import Contact from "./Contact";
import Speed from "./Speed";
import Transparacy from "./Transparacy";

export default function WCU() {
    return (
        <>
        <section className="m-4 p-4 flex justify-center">
            <h1 className="md:text-5xl text-3xl font-bold">Why Choose
            <span className="md:text-5xl text-3xl text-[#00ADEA] font-bold ml-2">Insurance Plus?</span>
            </h1>
        </section>
        <Automobiles/>
        <AIO/>
        <Speed/>
        <Contact/>
        <Transparacy/>
        </>
    )
}