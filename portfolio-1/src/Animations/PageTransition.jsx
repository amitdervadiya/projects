import { AnimatePresence ,motion} from "framer-motion"


const PageTransition = () =>{
  return (
    <div>
      <AnimatePresence>
        <motion.div intial={{opacity:1}} animate={{opacity:0,
          transition:{
            delay:1,
            duration:0.4,
            ease:'easeInOut'
          }

        }} className="h-screen w-screen fixed bg-black top-0 pointer-events-none">
      
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
export default PageTransition