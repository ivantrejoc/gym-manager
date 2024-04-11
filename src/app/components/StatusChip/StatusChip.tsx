import statusChipStyles from "./statusChip-styles.module.css";

const StatusChip = () => {
  return (
    <div className={statusChipStyles.box}>
    <div className={statusChipStyles.chip}>
      <p className={statusChipStyles.avatar}>A</p>
      <p className={statusChipStyles.label}>Activo</p>
    </div>
  </div>
  )
}
export default StatusChip