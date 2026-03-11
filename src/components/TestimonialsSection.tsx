import { motion } from "framer-motion";
import { MessageSquareQuote } from "lucide-react";
import SectionHeader from "./SectionHeader";

const testimonials = [
  {
    href: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.upwork.com%2Fab%2Fg%2Fpub%2Fwom%2Fprx%2FeyJwZXJzb25VaWQiOiI1MzI4ODgzNDQ0NDU4MzczMTIiLCJjb250cmFjdFJpZCI6IjE2NzA2OTAxIiwiYmFubmVyVHlwZSI6ImNvbnRyYWN0IiwiYmFubmVyVmFyaWFudCI6ImRlZmF1bHQiLCJ3b20iOiJmbHYyIiwicmVkaXJlY3QiOiJmbF9wcm9maWxlX3Byb21vIn0%3D%3Fnetwork%3Dfacebook%26fbclid%3DIwZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHg9SCDVosUg8Hst1ZfFB30RUaly9Usfz_i090j9z_HFPCikS_cavtW9WiWUO_aem_rqrvAgZRzhAwPqHAr-N5Hg&h=AT5ze_ip-g750iIMk8TqyppJ9iKA87sw_4fy7GowSNBKtJK0s61ay570NmxS-hSToAi0KzLQMbVV5Sx1gP6GFE0Ly4Bfio5OPwjpfmpsxN7Z_jAgOpLIZRirsd42oSIcVzI4IVzaaOVhrtGmiyOm8A&__tn__=H-R&c[0]=AT6deXb_LUPEksQM9sQMdTnsVGRQqntf2NxpcAeoZVnQ_y0k9yJ8zq6YxoTpkH68e0cH_7CklYVKfek7aWe2IpQwVSbSK71gTtbpFPw7XcOfizFy00xwgGrxgnotne59cZir9e99t5SZkO5ycg_ImC3HZYuLe3zWXRnIS_52D-plfqCItYk",
    image: "https://external.fceb6-4.fna.fbcdn.net/emg1/v/t13/7341591246498200627?url=https%3A%2F%2Fwww.upwork.com%2Fab%2Fg%2Fpub%2Fwom%2Fbnr%2FeyJwZXJzb25VaWQiOiI1MzI4ODgzNDQ0NDU4MzczMTIiLCJjb250cmFjdFJpZCI6IjE2NzA2OTAxIiwiYmFubmVyVHlwZSI6ImNvbnRyYWN0IiwiYmFubmVyVmFyaWFudCI6ImRlZmF1bHQiLCJ3b20iOiJmbHYyIiwicmVkaXJlY3QiOiJmbF9wcm9maWxlX3Byb21vIn0%3D&fb_obo=1&utld=upwork.com&stp=c0.5000x0.5000f_dst-jpg_flffffff_p1000x522_q75_tt6&_nc_gid=3RZl_8jWfUn5OOyqj6lpAA&_nc_eui2=AeFML9Q5boI4N8IlSNV1CNFPvx2Jp1VBgpy_HYmnVUGCnHI2gqG_IoDbp3l4RsyhSF0Ig0S_D726DsAlcSQNwLm9&_nc_oc=Admba5orartF455BGXHTa1SRCp8oynsoMekVFvsbnOewMRbcmSNlA4sRIpKUR1ukr1Q&ccb=13-1&oh=06_Q3-9AWfcrp3KS0o0SSA30vvMvfWrPavWxCCPhcwO8KIE7MAg&oe=69B30DE0&_nc_sid=852c2c",
    author: "Jonathan H."
  },
  {
    href: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.upwork.com%2Fab%2Fg%2Fpub%2Fwom%2Fprx%2FeyJwZXJzb25VaWQiOiI1MzI4ODgzNDQ0NDU4MzczMTIiLCJjb250cmFjdFJpZCI6IjE5MjUyMzE3IiwiYmFubmVyVHlwZSI6ImNvbnRyYWN0IiwiYmFubmVyVmFyaWFudCI6ImRlZmF1bHQiLCJ3b20iOiJmbHYyIiwicmVkaXJlY3QiOiJmbF9wcm9maWxlX3Byb21vIn0%3D%3Fnetwork%3Dfacebook%26fbclid%3DIwZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHuE-WFj4dEcUGpjIJ3IGfiod6FsKOLf3zrZATWsaQWWPk7K0lSjcPPs-jgQ6_aem_hyTQIrp5YLEJGksfgVwnuw&h=AT6GnDYS2GmIKVASI3YpGV-lh4O2GsqbwhVrIlIuVP8tpiaSu8S4kfBUNyXvTZNjHfImscCYY4s0zN57TW3RwsYNorhM9wcHnJuEjEeGUMteLqTiwMt0JFl3J56juNXuDsuaD8Ccz9CjfuaoUDAMQw&__tn__=H-R&c[0]=AT57qMlcP_-IMaTMnD7wLaUXaNhzMdj8AgMelmrqrlWOqLkA3eU55Ue1QIY5JI1ibvIsI8ZTZcmSi9kDbsEDldVdweO8TkvruUaRDjYfvyCuomdSjS2xhSVNztPgwiFUv7Hb1IZ0uyrfOgVYFHEAF7LsgX7R5cQjmhmGDp8UuRsUxflm_as",
    image: "https://external.fceb6-4.fna.fbcdn.net/emg1/v/t13/5536446676406047517?url=https%3A%2F%2Fwww.upwork.com%2Fab%2Fg%2Fpub%2Fwom%2Fbnr%2FeyJwZXJzb25VaWQiOiI1MzI4ODgzNDQ0NDU4MzczMTIiLCJjb250cmFjdFJpZCI6IjE5MjUyMzE3IiwiYmFubmVyVHlwZSI6ImNvbnRyYWN0IiwiYmFubmVyVmFyaWFudCI6ImRlZmF1bHQiLCJ3b20iOiJmbHYyIiwicmVkaXJlY3QiOiJmbF9wcm9maWxlX3Byb21vIn0%3D&fb_obo=1&utld=upwork.com&stp=c0.5000x0.5000f_dst-jpg_flffffff_p1000x522_q75_tt6&_nc_gid=AicYBlPkjc9xMxK87u3W_g&_nc_eui2=AeE8VUtjiFBnoYSJXqn8qm7q5Rb70UEKUuzlFvvRQQpS7LwrZgaMk_1-NvC04gRetYeTY2cXbQElejaZMH-lzqqJ&_nc_oc=AdkdQafC7OAjuVqTx26DA70CnEsdzqAv8tC_fArgTvjZ7Z8i_bJHB3FYTq7wAuTl9fc&ccb=13-1&oh=06_Q3-9Ab2t7lk5dXU4s8VSTD2D0P0VHrx-kAygR_hSu0fAGgxO&oe=69B32BDF&_nc_sid=c97757",
    author: "Steve"
  },
  {
    href: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.upwork.com%2Fab%2Fg%2Fpub%2Fwom%2Fprx%2FeyJwZXJzb25VaWQiOiI1MzI4ODgzNDQ0NDU4MzczMTIiLCJjb250cmFjdFJpZCI6IjMwNDQzOTIxIiwiYmFubmVyVHlwZSI6ImNvbnRyYWN0IiwiYmFubmVyVmFyaWFudCI6ImRlZmF1bHQiLCJ3b20iOiJmbHYyIiwicmVkaXJlY3QiOiJmbF9wcm9maWxlX3Byb21vIn0%3D%3Fnetwork%3Dfacebook%26fbclid%3DIwZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHvkgmeeKRUlChtVZLLd61hT3SUV5TdQmZdyTbFFgIe6xSeXQqOoJiRztRKfH_aem_Q248yBViNrO3RRBo6gF7cQ&h=AT6QimiGXr-y6SlOON8yMT0mUZESYz7peM6ZLa3Lrvss6ZliUOiTugNUmeGjPxRFgwAj2Jg2fho7Fy7xCy_Jgfwyqulcs-pLTmNZ_30GQ180Tt_AP3kaWGYomRMWqT6BELabC_CdaQFUXrXgiXlCxA&__tn__=H-R&c[0]=AT7oxI7i7h7B9Rk5dg432xkDKjX8sA_lAt_hbMNb3XjwKu5Mt_kr_MFiVYL9g1SdIWdVVt78xCd2oYS4uQakH5PBEqV1nKJa63ItOMzXl97enKnHFPuMANorYfvC-cy4K9J27c-XQshRkr7MVoKCtlaXnlr49vqCZc0wmIgXLlmQJtT5h7g",
    image: "https://external.fceb6-4.fna.fbcdn.net/emg1/v/t13/7116287193279720456?url=https%3A%2F%2Fwww.upwork.com%2Fab%2Fg%2Fpub%2Fwom%2Fbnr%2FeyJwZXJzb25VaWQiOiI1MzI4ODgzNDQ0NDU4MzczMTIiLCJjb250cmFjdFJpZCI6IjMwNDQzOTIxIiwiYmFubmVyVHlwZSI6ImNvbnRyYWN0IiwiYmFubmVyVmFyaWFudCI6ImRlZmF1bHQiLCJ3b20iOiJmbHYyIiwicmVkaXJlY3QiOiJmbF9wcm9maWxlX3Byb21vIn0%3D&fb_obo=1&utld=upwork.com&stp=c0.5000x0.5000f_dst-jpg_flffffff_p1000x522_q75_tt6&_nc_gid=lrhZO-IItVaWYXyeQid22g&_nc_eui2=AeFASdV0tF7XKPoyjgybpktrd5FvQZlfNTl3kW9BmV81OckgUce3AezXk6Mk7rWb1l5A0orRXIcH4uuNFWwfmMC8&_nc_oc=AdnwACr9nVCLoz_y-jRUo9_AR6rcK7VQ1Ia2iAwD0cFOJY7r4b2TTbv7wwsL-ae_Pic&ccb=13-1&oh=06_Q3-9AY_NoSoB-yWBTO7bnWc_dizaKij-bGRKXqNLQIwdajOV&oe=69B2FD48&_nc_sid=c97757",
    author: "Anonymous"
  },
  {
    href: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.upwork.com%2Fab%2Fg%2Fpub%2Fwom%2Fprx%2FeyJwZXJzb25VaWQiOiI1MzI4ODgzNDQ0NDU4MzczMTIiLCJjb250cmFjdFJpZCI6IjMwNDQzOTIxIiwiYmFubmVyVHlwZSI6ImNvbnRyYWN0IiwiYmFubmVyVmFyaWFudCI6ImRlZmF1bHQiLCJ3b20iOiJmbHYyIiwicmVkaXJlY3QiOiJmbF9wcm9maWxlX3Byb21vIn0%3D%3Fnetwork%3Dfacebook%26fbclid%3DIwZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHvkgmeeKRUlChtVZLLd61hT3SUV5TdQmZdyTbFFgIe6xSeXQqOoJiRztRKfH_aem_Q248yBViNrO3RRBo6gF7cQ&h=AT6QimiGXr-y6SlOON8yMT0mUZESYz7peM6ZLa3Lrvss6ZliUOiTugNUmeGjPxRFgwAj2Jg2fho7Fy7xCy_Jgfwyqulcs-pLTmNZ_30GQ180Tt_AP3kaWGYomRMWqT6BELabC_CdaQFUXrXgiXlCxA&__tn__=H-R&c[0]=AT7oxI7i7h7B9Rk5dg432xkDKjX8sA_lAt_hbMNb3XjwKu5Mt_kr_MFiVYL9g1SdIWdVVt78xCd2oYS4uQakH5PBEqV1nKJa63ItOMzXl97enKnHFPuMANorYfvC-cy4K9J27c-XQshRkr7MVoKCtlaXnlr49vqCZc0wmIgXLlmQJtT5h7g",
    image: "https://external.fceb6-4.fna.fbcdn.net/emg1/v/t13/8898178498002578345?url=https%3A%2F%2Fwww.upwork.com%2Fab%2Fg%2Fpub%2Fwom%2Fbnr%2FeyJwZXJzb25VaWQiOiI1MzI4ODgzNDQ0NDU4MzczMTIiLCJjb250cmFjdFJpZCI6IjM0NTExMzY4IiwiYmFubmVyVHlwZSI6ImNvbnRyYWN0IiwiYmFubmVyVmFyaWFudCI6ImRlZmF1bHQiLCJ3b20iOiJmbHYyIiwicmVkaXJlY3QiOiJmbF9wcm9maWxlX3Byb21vIn0%3D&fb_obo=1&utld=upwork.com&stp=c0.5000x0.5000f_dst-jpg_flffffff_p1000x522_q75_tt6&_nc_gid=lrhZO-IItVaWYXyeQid22g&_nc_eui2=AeEobDJTOXeJOap_Z_A5ga1j30meY6yFG8ffSZ5jrIUbxxv3d50TWFhQz9NKWnn1RPK1pUjPO4ZCbMjquVdgApJH&_nc_oc=Admup-az8h_t9J_RIaM0Blh-5hHY7HrPX0TBWp4v8uEifl7Viv-BXyV_I2HJT-gKXKE&ccb=13-1&oh=06_Q3-9Ab22nndS4JaxVZHmDQIlLO4jt-5yJbuMs8Hf-_ZiQH2_&oe=69B31684&_nc_sid=c97757",
    author: "Richard A."
  },
  {
    href: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.upwork.com%2Fab%2Fg%2Fpub%2Fwom%2Fprx%2FeyJwZXJzb25VaWQiOiI1MzI4ODgzNDQ0NDU4MzczMTIiLCJjb250cmFjdFJpZCI6IjMwNDQzOTIxIiwiYmFubmVyVHlwZSI6ImNvbnRyYWN0IiwiYmFubmVyVmFyaWFudCI6ImRlZmF1bHQiLCJ3b20iOiJmbHYyIiwicmVkaXJlY3QiOiJmbF9wcm9maWxlX3Byb21vIn0%3D%3Fnetwork%3Dfacebook%26fbclid%3DIwZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHvkgmeeKRUlChtVZLLd61hT3SUV5TdQmZdyTbFFgIe6xSeXQqOoJiRztRKfH_aem_Q248yBViNrO3RRBo6gF7cQ&h=AT6QimiGXr-y6SlOON8yMT0mUZESYz7peM6ZLa3Lrvss6ZliUOiTugNUmeGjPxRFgwAj2Jg2fho7Fy7xCy_Jgfwyqulcs-pLTmNZ_30GQ180Tt_AP3kaWGYomRMWqT6BELabC_CdaQFUXrXgiXlCxA&__tn__=H-R&c[0]=AT7oxI7i7h7B9Rk5dg432xkDKjX8sA_lAt_hbMNb3XjwKu5Mt_kr_MFiVYL9g1SdIWdVVt78xCd2oYS4uQakH5PBEqV1nKJa63ItOMzXl97enKnHFPuMANorYfvC-cy4K9J27c-XQshRkr7MVoKCtlaXnlr49vqCZc0wmIgXLlmQJtT5h7g",
    image: "https://external.fceb6-4.fna.fbcdn.net/emg1/v/t13/17076501621924413361?url=https%3A%2F%2Fwww.upwork.com%2Fab%2Fg%2Fpub%2Fwom%2Fbnr%2FeyJwZXJzb25VaWQiOiI1MzI4ODgzNDQ0NDU4MzczMTIiLCJjb250cmFjdFJpZCI6IjMwMDM5ODU3IiwiYmFubmVyVHlwZSI6ImNvbnRyYWN0IiwiYmFubmVyVmFyaWFudCI6ImRlZmF1bHQiLCJ3b20iOiJmbHYyIiwicmVkaXJlY3QiOiJmbF9wcm9maWxlX3Byb21vIn0%3D&fb_obo=1&utld=upwork.com&stp=c0.5000x0.5000f_dst-jpg_flffffff_p1000x522_q75_tt6&_nc_gid=4y0sGmX6SmgGnshO-yUSag&_nc_eui2=AeEAxOMUNRMuOn1DIzqnFLcKvpMvdEFhTdq-ky90QWFN2jqUk9yisfT_yoo7Vm8lgvr_ciHAhWWecfkfLdZ2Ak2r&_nc_oc=AdkkYi2tq_mwyBFQJKfloroxD_wFYdQxS97k88RU2h759ZBFxWQOFh9sEf53QJEPgIc&ccb=13-1&oh=06_Q3-9AY9Vt4HFPh4h8jbhDt2vqc7oJzi6ccODh8q0eBmDPhU7&oe=69B32D44&_nc_sid=c97757",
    author: "Harold R."
  },
  {
    href: "https://www.upwork.com/ab/g/pub/wom/prx/eyJwZXJzb25VaWQiOiI1MzI4ODgzNDQ0NDU4MzczMTIiLCJjb250cmFjdFJpZCI6IjE4NTYyMzcwIiwiYmFubmVyVHlwZSI6ImNvbnRyYWN0IiwiYmFubmVyVmFyaWFudCI6ImRlZmF1bHQiLCJ3b20iOiJmbHYyIiwicmVkaXJlY3QiOiJmbF9wcm9maWxlX3Byb21vIn0=?network=facebook&fbclid=IwZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHp-14zMp9WkRfFC26iprMz6IhTeA6l9oYhDnsRDZwSo0LuRFbdv9Cz2eRHAN_aem_BWoLGLmOfYZCQBHR47UnOg",
    image: "https://external.fceb6-4.fna.fbcdn.net/emg1/v/t13/17839521445614123233?url=https%3A%2F%2Fwww.upwork.com%2Fab%2Fg%2Fpub%2Fwom%2Fbnr%2FeyJwZXJzb25VaWQiOiI1MzI4ODgzNDQ0NDU4MzczMTIiLCJjb250cmFjdFJpZCI6IjE4NTYyMzcwIiwiYmFubmVyVHlwZSI6ImNvbnRyYWN0IiwiYmFubmVyVmFyaWFudCI6ImRlZmF1bHQiLCJ3b20iOiJmbHYyIiwicmVkaXJlY3QiOiJmbF9wcm9maWxlX3Byb21vIn0%3D&fb_obo=1&utld=upwork.com&stp=c0.5000x0.5000f_dst-jpg_flffffff_p1000x522_q75_tt6&_nc_gid=AicYBlPkjc9xMxK87u3W_g&_nc_eui2=AeH74Z1MoCrGnbJ0pNqlVY2zJWREn1ux5bklZESfW7HlucDKbVJAXdaVSuDQLAklTN_g4nEGJkOwluN5WDZn_WlF&_nc_oc=Adk_QwNohXmnAf3cFt7mpNU7KAn8zeGfTpTaxgm4JCy96SIRKmbnJvcvBdXuVUHMsuI&ccb=13-1&oh=06_Q3-9AYDY5erP2PHRlhxShNsxBJgqDagxmu5-XDIfKUVGxGqf&oe=69B330FF&_nc_sid=c97757",
    author: "Kunal S."
  }
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 relative">
    <div className="container px-4">
      <SectionHeader title="Client Commendations" subtitle="What Others Say" glowColor="gold" />
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.author}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="relative"
          >
            {t.href ? (
              <a href={t.href} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10">
                <span className="sr-only">View {t.author}'s testimonial</span>
              </a>
            ) : null}
            <MessageSquareQuote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
            <a href={t.href} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10"></a>
            {t.image ? (
              <img src={t.image} alt={`${t.author}'s testimonial`} className="w-full h-auto object-contain rounded-md mb-4" />
            ) : (
              <div className="w-full h-48 bg-muted rounded-md mb-4 flex items-center justify-center">
                <span className="text-sm text-muted-foreground">No image available</span>
              </div>
            )}  
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-neon-green flex items-center justify-center">
                <span className="text-xs font-heading font-bold text-primary-foreground">{t.author.slice(-1)}</span>
              </div>
              <span className="text-sm font-accent text-neon-gold tracking-wider">— {t.author}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
