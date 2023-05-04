import styles from "./Loading.module.css"
interface LoadingAtomProps {}

const LoadingAtom: React.FC<LoadingAtomProps> = () => {
  return <span className={styles.loading}>Loading</span>
}

export default LoadingAtom
