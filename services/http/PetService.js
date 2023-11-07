import { http, httpAuth } from "./http";

class PetService {
  async upload(Name, PassportNumber, imgs) {
    const form = new FormData();

    form.append("Name", Name);
    form.append("PassportNumber", PassportNumber);
    for (let i = 0; i < imgs.length; i++) {
      form.append("Imgs", {
        name: "img.png",
        uri: imgs[i].uri,
        type: "image/png",
      });
    }

    return httpAuth.post("/Pets", form).catch((err) => console.log(err));
  }
  async fetchPets(userId){
    return httpAuth.get("Pets/"+userId)
  }
}

export default new PetService();
