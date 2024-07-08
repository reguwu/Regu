import styles from "@/styles/Divider.module.css"

interface Props {
  text?: string
  margin?: Array<number>
  orientation?: "h" | "v"
}

const Divider = ({ text, margin=[1, 1, 1, 1], orientation="h"} : Props) => {
  const marginValue = `${margin[0]}rem ${margin[1]}rem ${margin[2]}rem ${margin[3]}rem`;
  return (
    <> 
      { text ?
        <div className={styles[`${orientation}divider-container`]}>
          <div className={styles[`${orientation}divider`]} style={{margin: marginValue}}></div>
          <div className={styles["divider-text"]}>{text}</div>
          <div className={styles[`${orientation}divider`]} style={{margin: marginValue}}></div>
        </div>
        :
        <div className={styles[`${orientation}divider`]} style={{margin: marginValue}}></div>
      }
    </>
  )
}

export default Divider