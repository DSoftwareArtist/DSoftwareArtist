import { BrainCircuit, Map, Terminal, Car, Bot, Globe, MapPin } from "lucide-react";

export const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export const navItems = [
  { id: "hero", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "toolset", label: "Toolset" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Testimonials" },
  { id: "rates", label: "Rates" },
];

export const tagline = "Crafting Scalable Code and Intelligent Systems";


export const testimonials = [
  {
    href: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.upwork.com%2Fab%2Fg%2Fpub%2Fwom%2Fprx%2FeyJwZXJzb25VaWQiOiI1MzI4ODgzNDQ0NDU4MzczMTIiLCJjb250cmFjdFJpZCI6IjMwNDQzOTIxIiwiYmFubmVyVHlwZSI6ImNvbnRyYWN0IiwiYmFubmVyVmFyaWFudCI6ImRlZmF1bHQiLCJ3b20iOiJmbHYyIiwicmVkaXJlY3QiOiJmbF9wcm9maWxlX3Byb21vIn0%3D%3Fnetwork%3Dfacebook%26fbclid%3DIwZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHvkgmeeKRUlChtVZLLd61hT3SUV5TdQmZdyTbFFgIe6xSeXQqOoJiRztRKfH_aem_Q248yBViNrO3RRBo6gF7cQ&h=AT6QimiGXr-y6SlOON8yMT0mUZESYz7peM6ZLa3Lrvss6ZliUOiTugNUmeGjPxRFgwAj2Jg2fho7Fy7xCy_Jgfwyqulcs-pLTmNZ_30GQ180Tt_AP3kaWGYomRMWqT6BELabC_CdaQFUXrXgiXlCxA&__tn__=H-R&c[0]=AT7oxI7i7h7B9Rk5dg432xkDKjX8sA_lAt_hbMNb3XjwKu5Mt_kr_MFiVYL9g1SdIWdVVt78xCd2oYS4uQakH5PBEqV1nKJa63ItOMzXl97enKnHFPuMANorYfvC-cy4K9J27c-XQshRkr7MVoKCtlaXnlr49vqCZc0wmIgXLlmQJtT5h7g",
    image: "https://external.fceb6-4.fna.fbcdn.net/emg1/v/t13/8898178498002578345?url=https%3A%2F%2Fwww.upwork.com%2Fab%2Fg%2Fpub%2Fwom%2Fbnr%2FeyJwZXJzb25VaWQiOiI1MzI4ODgzNDQ0NDU4MzczMTIiLCJjb250cmFjdFJpZCI6IjM0NTExMzY4IiwiYmFubmVyVHlwZSI6ImNvbnRyYWN0IiwiYmFubmVyVmFyaWFudCI6ImRlZmF1bHQiLCJ3b20iOiJmbHYyIiwicmVkaXJlY3QiOiJmbF9wcm9maWxlX3Byb21vIn0%3D&fb_obo=1&utld=upwork.com&stp=c0.5000x0.5000f_dst-jpg_flffffff_p1000x522_q75_tt6&_nc_gid=lrhZO-IItVaWYXyeQid22g&_nc_eui2=AeEobDJTOXeJOap_Z_A5ga1j30meY6yFG8ffSZ5jrIUbxxv3d50TWFhQz9NKWnn1RPK1pUjPO4ZCbMjquVdgApJH&_nc_oc=Admup-az8h_t9J_RIaM0Blh-5hHY7HrPX0TBWp4v8uEifl7Viv-BXyV_I2HJT-gKXKE&ccb=13-1&oh=06_Q3-9Ab22nndS4JaxVZHmDQIlLO4jt-5yJbuMs8Hf-_ZiQH2_&oe=69B31684&_nc_sid=c97757",
    author: "Richard Apperly",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQGoLByhXamm_g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1701297353094?e=2147483647&v=beta&t=F_EP7fK_ECCiNBEFXAkxrHCBDOe5Paq2qw6aWgLANmg"
  },
  {
    href: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.upwork.com%2Fab%2Fg%2Fpub%2Fwom%2Fprx%2FeyJwZXJzb25VaWQiOiI1MzI4ODgzNDQ0NDU4MzczMTIiLCJjb250cmFjdFJpZCI6IjMwNDQzOTIxIiwiYmFubmVyVHlwZSI6ImNvbnRyYWN0IiwiYmFubmVyVmFyaWFudCI6ImRlZmF1bHQiLCJ3b20iOiJmbHYyIiwicmVkaXJlY3QiOiJmbF9wcm9maWxlX3Byb21vIn0%3D%3Fnetwork%3Dfacebook%26fbclid%3DIwZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHvkgmeeKRUlChtVZLLd61hT3SUV5TdQmZdyTbFFgIe6xSeXQqOoJiRztRKfH_aem_Q248yBViNrO3RRBo6gF7cQ&h=AT6QimiGXr-y6SlOON8yMT0mUZESYz7peM6ZLa3Lrvss6ZliUOiTugNUmeGjPxRFgwAj2Jg2fho7Fy7xCy_Jgfwyqulcs-pLTmNZ_30GQ180Tt_AP3kaWGYomRMWqT6BELabC_CdaQFUXrXgiXlCxA&__tn__=H-R&c[0]=AT7oxI7i7h7B9Rk5dg432xkDKjX8sA_lAt_hbMNb3XjwKu5Mt_kr_MFiVYL9g1SdIWdVVt78xCd2oYS4uQakH5PBEqV1nKJa63ItOMzXl97enKnHFPuMANorYfvC-cy4K9J27c-XQshRkr7MVoKCtlaXnlr49vqCZc0wmIgXLlmQJtT5h7g",
    image: "https://external.fceb6-4.fna.fbcdn.net/emg1/v/t13/17076501621924413361?url=https%3A%2F%2Fwww.upwork.com%2Fab%2Fg%2Fpub%2Fwom%2Fbnr%2FeyJwZXJzb25VaWQiOiI1MzI4ODgzNDQ0NDU4MzczMTIiLCJjb250cmFjdFJpZCI6IjMwMDM5ODU3IiwiYmFubmVyVHlwZSI6ImNvbnRyYWN0IiwiYmFubmVyVmFyaWFudCI6ImRlZmF1bHQiLCJ3b20iOiJmbHYyIiwicmVkaXJlY3QiOiJmbF9wcm9maWxlX3Byb21vIn0%3D&fb_obo=1&utld=upwork.com&stp=c0.5000x0.5000f_dst-jpg_flffffff_p1000x522_q75_tt6&_nc_gid=4y0sGmX6SmgGnshO-yUSag&_nc_eui2=AeEAxOMUNRMuOn1DIzqnFLcKvpMvdEFhTdq-ky90QWFN2jqUk9yisfT_yoo7Vm8lgvr_ciHAhWWecfkfLdZ2Ak2r&_nc_oc=AdkkYi2tq_mwyBFQJKfloroxD_wFYdQxS97k88RU2h759ZBFxWQOFh9sEf53QJEPgIc&ccb=13-1&oh=06_Q3-9AY9Vt4HFPh4h8jbhDt2vqc7oJzi6ccODh8q0eBmDPhU7&oe=69B32D44&_nc_sid=c97757",
    author: "Harold Riley",
    avatar: "https://media.licdn.com/dms/image/v2/C4E03AQFy9HKfFoldfw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1560192122961?e=2147483647&v=beta&t=DoW6N0rPGPF3FGYQqtxsIKR6xjsIGhqCG62w-1Kyfno"
  },
  {
    href: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.upwork.com%2Fab%2Fg%2Fpub%2Fwom%2Fprx%2FeyJwZXJzb25VaWQiOiI1MzI4ODgzNDQ0NDU4MzczMTIiLCJjb250cmFjdFJpZCI6IjE2NzA2OTAxIiwiYmFubmVyVHlwZSI6ImNvbnRyYWN0IiwiYmFubmVyVmFyaWFudCI6ImRlZmF1bHQiLCJ3b20iOiJmbHYyIiwicmVkaXJlY3QiOiJmbF9wcm9maWxlX3Byb21vIn0%3D%3Fnetwork%3Dfacebook%26fbclid%3DIwZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHg9SCDVosUg8Hst1ZfFB30RUaly9Usfz_i090j9z_HFPCikS_cavtW9WiWUO_aem_rqrvAgZRzhAwPqHAr-N5Hg&h=AT5ze_ip-g750iIMk8TqyppJ9iKA87sw_4fy7GowSNBKtJK0s61ay570NmxS-hSToAi0KzLQMbVV5Sx1gP6GFE0Ly4Bfio5OPwjpfmpsxN7Z_jAgOpLIZRirsd42oSIcVzI4IVzaaOVhrtGmiyOm8A&__tn__=H-R&c[0]=AT6deXb_LUPEksQM9sQMdTnsVGRQqntf2NxpcAeoZVnQ_y0k9yJ8zq6YxoTpkH68e0cH_7CklYVKfek7aWe2IpQwVSbSK71gTtbpFPw7XcOfizFy00xwgGrxgnotne59cZir9e99t5SZkO5ycg_ImC3HZYuLe3zWXRnIS_52D-plfqCItYk",
    image: "https://external.fceb6-4.fna.fbcdn.net/emg1/v/t13/7341591246498200627?url=https%3A%2F%2Fwww.upwork.com%2Fab%2Fg%2Fpub%2Fwom%2Fbnr%2FeyJwZXJzb25VaWQiOiI1MzI4ODgzNDQ0NDU4MzczMTIiLCJjb250cmFjdFJpZCI6IjE2NzA2OTAxIiwiYmFubmVyVHlwZSI6ImNvbnRyYWN0IiwiYmFubmVyVmFyaWFudCI6ImRlZmF1bHQiLCJ3b20iOiJmbHYyIiwicmVkaXJlY3QiOiJmbF9wcm9maWxlX3Byb21vIn0%3D&fb_obo=1&utld=upwork.com&stp=c0.5000x0.5000f_dst-jpg_flffffff_p1000x522_q75_tt6&_nc_gid=3RZl_8jWfUn5OOyqj6lpAA&_nc_eui2=AeFML9Q5boI4N8IlSNV1CNFPvx2Jp1VBgpy_HYmnVUGCnHI2gqG_IoDbp3l4RsyhSF0Ig0S_D726DsAlcSQNwLm9&_nc_oc=Admba5orartF455BGXHTa1SRCp8oynsoMekVFvsbnOewMRbcmSNlA4sRIpKUR1ukr1Q&ccb=13-1&oh=06_Q3-9AWfcrp3KS0o0SSA30vvMvfWrPavWxCCPhcwO8KIE7MAg&oe=69B30DE0&_nc_sid=852c2c",
    author: "Jon Harsch",
    avatar: "https://media.licdn.com/dms/image/v2/C5603AQGJ_rFs0-SiGg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1596358752389?e=1775088000&v=beta&t=7wf5LHF4-WJwy4mQlo68VXnbvkoF-C_A8e4DHnsSK6g"
  },
  {
    href: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.upwork.com%2Fab%2Fg%2Fpub%2Fwom%2Fprx%2FeyJwZXJzb25VaWQiOiI1MzI4ODgzNDQ0NDU4MzczMTIiLCJjb250cmFjdFJpZCI6IjMwNDQzOTIxIiwiYmFubmVyVHlwZSI6ImNvbnRyYWN0IiwiYmFubmVyVmFyaWFudCI6ImRlZmF1bHQiLCJ3b20iOiJmbHYyIiwicmVkaXJlY3QiOiJmbF9wcm9maWxlX3Byb21vIn0%3D%3Fnetwork%3Dfacebook%26fbclid%3DIwZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHvkgmeeKRUlChtVZLLd61hT3SUV5TdQmZdyTbFFgIe6xSeXQqOoJiRztRKfH_aem_Q248yBViNrO3RRBo6gF7cQ&h=AT6QimiGXr-y6SlOON8yMT0mUZESYz7peM6ZLa3Lrvss6ZliUOiTugNUmeGjPxRFgwAj2Jg2fho7Fy7xCy_Jgfwyqulcs-pLTmNZ_30GQ180Tt_AP3kaWGYomRMWqT6BELabC_CdaQFUXrXgiXlCxA&__tn__=H-R&c[0]=AT7oxI7i7h7B9Rk5dg432xkDKjX8sA_lAt_hbMNb3XjwKu5Mt_kr_MFiVYL9g1SdIWdVVt78xCd2oYS4uQakH5PBEqV1nKJa63ItOMzXl97enKnHFPuMANorYfvC-cy4K9J27c-XQshRkr7MVoKCtlaXnlr49vqCZc0wmIgXLlmQJtT5h7g",
    image: "https://external.fceb6-4.fna.fbcdn.net/emg1/v/t13/7116287193279720456?url=https%3A%2F%2Fwww.upwork.com%2Fab%2Fg%2Fpub%2Fwom%2Fbnr%2FeyJwZXJzb25VaWQiOiI1MzI4ODgzNDQ0NDU4MzczMTIiLCJjb250cmFjdFJpZCI6IjMwNDQzOTIxIiwiYmFubmVyVHlwZSI6ImNvbnRyYWN0IiwiYmFubmVyVmFyaWFudCI6ImRlZmF1bHQiLCJ3b20iOiJmbHYyIiwicmVkaXJlY3QiOiJmbF9wcm9maWxlX3Byb21vIn0%3D&fb_obo=1&utld=upwork.com&stp=c0.5000x0.5000f_dst-jpg_flffffff_p1000x522_q75_tt6&_nc_gid=lrhZO-IItVaWYXyeQid22g&_nc_eui2=AeFASdV0tF7XKPoyjgybpktrd5FvQZlfNTl3kW9BmV81OckgUce3AezXk6Mk7rWb1l5A0orRXIcH4uuNFWwfmMC8&_nc_oc=AdnwACr9nVCLoz_y-jRUo9_AR6rcK7VQ1Ia2iAwD0cFOJY7r4b2TTbv7wwsL-ae_Pic&ccb=13-1&oh=06_Q3-9AY_NoSoB-yWBTO7bnWc_dizaKij-bGRKXqNLQIwdajOV&oe=69B2FD48&_nc_sid=c97757",
    author: "Morten Punnerud",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHHpnZKR5iIPA/profile-displayphoto-scale_400_400/B4DZqMzWqVJAAg-/0/1763298864969?e=1775088000&v=beta&t=TnSuOksipTo9EPfo1m1tfNmz7lAfHxiMug9LViqiqUg"
  },
  {
    href: "https://www.upwork.com/ab/g/pub/wom/prx/eyJwZXJzb25VaWQiOiI1MzI4ODgzNDQ0NDU4MzczMTIiLCJjb250cmFjdFJpZCI6IjE4NTYyMzcwIiwiYmFubmVyVHlwZSI6ImNvbnRyYWN0IiwiYmFubmVyVmFyaWFudCI6ImRlZmF1bHQiLCJ3b20iOiJmbHYyIiwicmVkaXJlY3QiOiJmbF9wcm9maWxlX3Byb21vIn0=?network=facebook&fbclid=IwZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHp-14zMp9WkRfFC26iprMz6IhTeA6l9oYhDnsRDZwSo0LuRFbdv9Cz2eRHAN_aem_BWoLGLmOfYZCQBHR47UnOg",
    image: "https://external.fceb6-4.fna.fbcdn.net/emg1/v/t13/17839521445614123233?url=https%3A%2F%2Fwww.upwork.com%2Fab%2Fg%2Fpub%2Fwom%2Fbnr%2FeyJwZXJzb25VaWQiOiI1MzI4ODgzNDQ0NDU4MzczMTIiLCJjb250cmFjdFJpZCI6IjE4NTYyMzcwIiwiYmFubmVyVHlwZSI6ImNvbnRyYWN0IiwiYmFubmVyVmFyaWFudCI6ImRlZmF1bHQiLCJ3b20iOiJmbHYyIiwicmVkaXJlY3QiOiJmbF9wcm9maWxlX3Byb21vIn0%3D&fb_obo=1&utld=upwork.com&stp=c0.5000x0.5000f_dst-jpg_flffffff_p1000x522_q75_tt6&_nc_gid=AicYBlPkjc9xMxK87u3W_g&_nc_eui2=AeH74Z1MoCrGnbJ0pNqlVY2zJWREn1ux5bklZESfW7HlucDKbVJAXdaVSuDQLAklTN_g4nEGJkOwluN5WDZn_WlF&_nc_oc=Adk_QwNohXmnAf3cFt7mpNU7KAn8zeGfTpTaxgm4JCy96SIRKmbnJvcvBdXuVUHMsuI&ccb=13-1&oh=06_Q3-9AYDY5erP2PHRlhxShNsxBJgqDagxmu5-XDIfKUVGxGqf&oe=69B330FF&_nc_sid=c97757",
    author: "Kunal Sood",
    avatar: "https://media.licdn.com/dms/image/v2/C5103AQFJ_lu8Dc898g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516263276919?e=2147483647&v=beta&t=iUzFEjI5i1TXpNlBaRTW3d-_yU6JKPK-RT2SB8bG0c8"
  },
  {
    href: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.upwork.com%2Fab%2Fg%2Fpub%2Fwom%2Fprx%2FeyJwZXJzb25VaWQiOiI1MzI4ODgzNDQ0NDU4MzczMTIiLCJjb250cmFjdFJpZCI6IjE5MjUyMzE3IiwiYmFubmVyVHlwZSI6ImNvbnRyYWN0IiwiYmFubmVyVmFyaWFudCI6ImRlZmF1bHQiLCJ3b20iOiJmbHYyIiwicmVkaXJlY3QiOiJmbF9wcm9maWxlX3Byb21vIn0%3D%3Fnetwork%3Dfacebook%26fbclid%3DIwZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHuE-WFj4dEcUGpjIJ3IGfiod6FsKOLf3zrZATWsaQWWPk7K0lSjcPPs-jgQ6_aem_hyTQIrp5YLEJGksfgVwnuw&h=AT6GnDYS2GmIKVASI3YpGV-lh4O2GsqbwhVrIlIuVP8tpiaSu8S4kfBUNyXvTZNjHfImscCYY4s0zN57TW3RwsYNorhM9wcHnJuEjEeGUMteLqTiwMt0JFl3J56juNXuDsuaD8Ccz9CjfuaoUDAMQw&__tn__=H-R&c[0]=AT57qMlcP_-IMaTMnD7wLaUXaNhzMdj8AgMelmrqrlWOqLkA3eU55Ue1QIY5JI1ibvIsI8ZTZcmSi9kDbsEDldVdweO8TkvruUaRDjYfvyCuomdSjS2xhSVNztPgwiFUv7Hb1IZ0uyrfOgVYFHEAF7LsgX7R5cQjmhmGDp8UuRsUxflm_as",
    image: "https://external.fceb6-4.fna.fbcdn.net/emg1/v/t13/5536446676406047517?url=https%3A%2F%2Fwww.upwork.com%2Fab%2Fg%2Fpub%2Fwom%2Fbnr%2FeyJwZXJzb25VaWQiOiI1MzI4ODgzNDQ0NDU4MzczMTIiLCJjb250cmFjdFJpZCI6IjE5MjUyMzE3IiwiYmFubmVyVHlwZSI6ImNvbnRyYWN0IiwiYmFubmVyVmFyaWFudCI6ImRlZmF1bHQiLCJ3b20iOiJmbHYyIiwicmVkaXJlY3QiOiJmbF9wcm9maWxlX3Byb21vIn0%3D&fb_obo=1&utld=upwork.com&stp=c0.5000x0.5000f_dst-jpg_flffffff_p1000x522_q75_tt6&_nc_gid=AicYBlPkjc9xMxK87u3W_g&_nc_eui2=AeE8VUtjiFBnoYSJXqn8qm7q5Rb70UEKUuzlFvvRQQpS7LwrZgaMk_1-NvC04gRetYeTY2cXbQElejaZMH-lzqqJ&_nc_oc=AdkdQafC7OAjuVqTx26DA70CnEsdzqAv8tC_fArgTvjZ7Z8i_bJHB3FYTq7wAuTl9fc&ccb=13-1&oh=06_Q3-9Ab2t7lk5dXU4s8VSTD2D0P0VHrx-kAygR_hSu0fAGgxO&oe=69B32BDF&_nc_sid=c97757",
    author: "Steve Kenneston"
  }
];

export const tools = [
  // --- AI & DATA CORE ---
  { name: "OpenCode", desc: "Leveraging agentic TUI for autonomous coding & refactoring",  level: "Master"},
  { name: "OpenAI API", desc: "Assistant API, GPT-4o, & Function Calling", level: "Master" },
  { name: "RAG Systems", desc: "Vector embeddings & semantic search logic", level: "Master" },
  { name: "Python", desc: "Core AI/Backend development — 10+ years", level: "Master" },
  { name: "LangChain", desc: "Orchestrating LLM workflows and chains", level: "Expert" },
  { name: "BeautifulSoup", desc: "Web scraping for AI training & data mining", level: "Expert" },

  // --- FULL STACK ARCHITECTURE ---
  { name: "Django", desc: "Scalable backend for AI-driven platforms", level: "Master" },
  { name: "PostgreSQL", desc: "Relational data & Vector storage (pgvector)", level: "Expert" },
  { name: "Vue | React", desc: "Building intelligent, reactive AI interfaces", level: "Expert" },
  { name: "TypeScript", desc: "Type-safe frontend for complex AI states", level: "Expert" },
  { name: "Tailwind CSS", desc: "Modern, rapid UI styling for AI dashboards", level: "Expert" },

  // --- GEOSPATIAL & SPECIALIZED ---
  { name: "Leaflet", desc: "Interactive maps & geospatial AI visualization", level: "Expert" },
  { name: "APIs", desc: "Designing REST & GraphQL for AI integration", level: "Expert" },
  { name: "Docker", desc: "Containerizing AI models & full-stack apps", level: "Advanced" },
  { name: "Git", desc: "Collaborative version control & CI/CD", level: "Expert" },
];

export const projects = [
  {
    icon: Bot,
    web: "https://www.loom.com/share/4dcc13cee98c4884a360dd8db94bed96",
    title: "Web Automation Bots",
    notes: "There are mutiple projects under this category. Only one demo is provided here. Please message me on upwork for more details.",
    desc: "Python-based bots automating web interactions for data extraction, form submissions, and task automation across various platforms.",
    tags: ["Python", "Playwright", "APIs", "BeautifulSoup", "Pandas", "Highcharts", "Requests", "Selenium", "Django", "Crontab", "Multithreading", "Docker", "AWS"],
    status: "ACTIVE",
  },
  {
    icon: Car,
    web: "https://autograf.com.au",
    title: "Autograf AI Assistant",
    demo: "https://www.loom.com/share/e792eb7239f6453da35df17083345ed4  ",
    notes: "This is protected with username and password. Please message me on upwork for access.",
    desc: "Designed and implemented an OpenAI Assistant to streamline customer interactions, enhance lead generation, and optimize sales processes for car dealerships. Integrated advanced NLP techniques to provide personalized recommendations and support.",
    tags: ["Python", "Django","OpenAI API", "RAG Systems", "OpenCode/MCP", "Pinecone", "ElasticSearch", "Data Mining", "React", "CSS"],
    status: "COMPLETED",
  },
  {
    icon: Map,
    web: "https://purelypeer.cash",
    ios: "https://apps.apple.com/us/app/purelypeer/id6748019098",
    demo: "https://www.loom.com/share/f8dba7b325b34f06b92cffa3d63a0ea8",
    notes: "The app is already published on both App Store and Google Play. Please search for 'PurelyPeer' to download and try it out!",
    title: "PurelyPeer App",
    desc: "A geolocation-based mobile game inspired by Pokémon Go, built with Quasar and CapacitorJS. Players explore real-world locations to discover virtual treasures, complete quests, and compete on global leaderboards.",
    tags: ["Leaflet", "PostgreSQL", "Quasar", "CapacitorJs", "Geolocation","GeoDjango", "Geospatial Indexing", "Real-time Tracking"],
    status: "COMPLETED",
  },
];

export const services = [
  { icon: Globe, title: "Web App Development", rate: "$25–$50/hr", desc: "Full-stack solutions, backend & frontend.", highlight: false },
  { icon: MapPin, title: "Geospatial & Mapping", rate: "$30–$60/hr", desc: "Leaflet, GeoDjango, GIS analysis.", highlight: true },
  { icon: Bot, title: "Automation & Data Tools", rate: "$30–$80/hr", desc: "Python bots, dashboards, data processing.", highlight: false },
];

export const skillCategories = [
  {
    name: "Programming Languages | Frameworks & Libraries", // Combined category to match your title
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 80 },
      { name: "TypeScript", level: 75 },
      { name: "Django", level: 95 },
      { name: "React / Vue", level: 85 },
    ],
  },
  {
    name: "AI & LLM Integration", // New category to match your title
    skills: [
      { name: "OpenAI Assistant API", level: 92 },
      { name: "RAG Systems", level: 90 },
      { name: "LangChain / LlamaIndex", level: 85 },
      { name: "Prompt Engineering", level: 88 },
    ],
  },
  {
    name: "Database & Data Tools",
    skills: [
      { name: "PostgreSQL / PostGIS", level: 90 },
      { name: "Vector Databases (Pinecone/Chroma)", level: 85 }, // Essential for RAG
      { name: "Pandas", level: 80 },
      { name: "GeoDjango", level: 82 },
    ],
  },
  {
    name: "Specialties",
    skills: [
      { name: "AI Engineer", level: 95 },
      { name: "Full-Stack Architecture", level: 92 },
      { name: "Geospatial Analysis", level: 88 },
      { name: "Math & Algorithmic Logic", level: 90 },
    ],
  },
];

export const experiences = [
  {
    icon: BrainCircuit,
    title: "AI Engineer & Python Full-Stack Architect",
    period: "2015–Present",
    desc: "Architecting end-to-end RAG systems and OpenAI Assistant integrations within scalable Python ecosystems. Transforming complex business logic into intelligent, autonomous applications.",
  },
  {
    icon: Terminal,
    title: "Agentic Automation & RAG Pipelines",
    period: "Ongoing",
    desc: "Developing custom RAG pipelines using Pinecone and OpenAI. Leveraging agentic workflows (OpenCode/MCP) to automate data mining, semantic search, and complex math-heavy visualizations.",
  },
  {
    icon: Car,
    title: "AI Assistant for Car Dealerships",
    period: "Autograf | Featured Project",
    desc: "Designed and implemented an OpenAI Assistant to streamline customer interactions, enhance lead generation, and optimize sales processes for car dealerships. Integrated advanced NLP techniques to provide personalized recommendations and support.",
  },
  {
    icon: Map,
    title: "Mobile App Development",
    period: "PurelyPeer | Featured Project",
    desc: "Architected a high-performance cross-platform geospatial engine, integrating GeoDjango and Leaflet to handle complex coordinate logic and real-time location tracking for iOS and Android.",
  }
];

export const glowClasses = {
  blue: "text-glow-blue text-primary",
  green: "text-glow-green text-neon-green",
  gold: "text-glow-gold text-neon-gold",
};
