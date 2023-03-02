let input = prompt('명령어를 입력하세요!');
const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];

while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('*******************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*******************')
    } else if (input === 'new') {
        const newTodo = prompt('새 할일은 무엇인가요?');
        todos.push(newTodo);
        console.log(`${newTodo} 리스트에 추가되었습니다.`)
    } else if (input === "delete") {
        const index = parseInt(prompt('삭제할 리스트의 번호를 입력하세요'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`${deleted[0]}를 삭제했습니다`);
        } else {
            console.log('알수없는 값입니다')
        }
    }
    input = prompt('명령어를 입력하세요!');
}

console.log('앱을 종료 합니다');

