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

    return httpAuth.post("/Pets", form);
  }
  async fetchPets(userId) {
    return httpAuth.get(`User/${userId}/Pets`);
  }
  async fetchPet(petId) {
    return httpAuth.get("Pets/" + petId);
  }
  async fetchDoc(docId) {
    return httpAuth.get("Document/" + docId);
  }
}

export default new PetService();
