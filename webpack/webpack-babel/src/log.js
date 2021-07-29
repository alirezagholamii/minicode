const preLogArr = ['🍋','🍍','🍌','🍎','🥭','🍄','🌶','🍏','🥦','🌰','🥕']

export default function log(param){
    const index =Math.floor(Math.random() * preLogArr.length) ;
    const preLog = preLogArr[index]
    console.log(preLog, param)
}