import{kueri}from"../core/api.js";
export const daftarHeroAktif=()=>kueri(k=>k.from("hero_slide").select("*").eq("aktif",true).order("urutan",{ascending:true}));
export const daftarSemuaHero=()=>kueri(k=>k.from("hero_slide").select("*").order("urutan",{ascending:true}));
export const simpanHero=(data,id=null)=>kueri(k=>id?k.from("hero_slide").update(data).eq("id",id).select().single():k.from("hero_slide").insert(data).select().single());
export const hapusHero=id=>kueri(k=>k.from("hero_slide").delete().eq("id",id));