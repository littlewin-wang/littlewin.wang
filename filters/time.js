// 转换为本地时间格式
export const toLocalString = date => {
  return date ? new Date(date).toLocaleString() : date
}
