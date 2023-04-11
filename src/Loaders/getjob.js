import { getShoppingCart } from "../utils/fakedb";


const jobsAndappliedData = async () =>{
    const jobsData = await fetch('/jobhunt.json')
    const jobs = await jobsData.json()
    const savedJob = getShoppingCart();
    let cartArray = [];
    for (const _id in savedJob) {
        const foundJobs = jobs.find((job) => job._id == _id);
        if (foundJobs) {
            cartArray.push(foundJobs)
        }
    }
    return {cartArray, jobs}
}
export default jobsAndappliedData