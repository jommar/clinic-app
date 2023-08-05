import chalk from 'chalk'

export const time = () => {
  console.log(chalk.cyanBright(Date.now()))
}
export const spacer = () => {
  console.log('---')
}
