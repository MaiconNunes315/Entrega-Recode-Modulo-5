import { instance } from "@/config/configAxios";

export default function useTrip() {
    instance.get("/viagem").then(res => console.log(res))
}
