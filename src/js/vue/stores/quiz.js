import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useQuizStore = defineStore('quiz', () => {
    const questions = [
        {
            body: 'which is the tallest animal in the world?',
            answers: [
                {id:1, body: 'giraffe'},
                {id:2, body: 'lion'},
                {id:3, body: 'cheetah'},
                {id:4, body: 'bat'}
            ],
            rightAnswerId: 1
        },
        {
            body: 'which animal has the longest lifeline?',
            answers: [
                {id:1, body: 'falcon'},
                {id:2, body: 'the arctic whale'},
                {id:3, body: 'octopus'},
                {id:4, body: 'elephant'}
            ],
            rightAnswerId: 2
        },
        {
            body: 'how many legs does an octopus have?',
            answers: [
                {id:1, body: 'six'},
                {id:2, body: 'ten'},
                {id:3, body: 'eight'},
                {id:4, body: 'seven'}
            ],
            rightAnswerId: 3
        },
        {
            body: 'which bird is the symbol of peace?',
            answers: [
                {id:1, body: 'dove'},
                {id:2, body: 'falcon'},
                {id:3, body: 'owl'},
                {id:4, body: 'raven'}
            ],
            rightAnswerId: 1
        },
        {
            body: 'which is the fastest animal?',
            answers: [
                {id:1, body: 'tiger'},
                {id:2, body: 'dog'},
                {id:3, body: 'cheetah'},
                {id:4, body: 'pig'}
            ],
            rightAnswerId: 3
        },
        {
            body: 'which bird lays the largest egg?',
            answers: [
                {id:1, body: 'sparrow'},
                {id:2, body: 'eagle'},
                {id:3, body: 'woodpecker'},
                {id:4, body: 'ostrich'}
            ],
            rightAnswerId: 4
        },
        {
            body: 'which is the only mammal that can fly?',
            answers: [
                {id:1, body: 'goat'},
                {id:2, body: 'bat'},
                {id:3, body: 'horse'},
                {id:4, body: 'donkey'}
            ],
            rightAnswerId: 2
        },
        {
            body: 'which is the only land animal that cannot jump?',
            answers: [
                {id:1, body: 'lion'},
                {id:2, body: 'goat'},
                {id:3, body: 'elephant'},
                {id:4, body: 'dog'}
            ],
            rightAnswerId: 3
        },
        {
            body: 'which is the only bird that can fly backwards?',
            answers: [
                {id:1, body: 'raven'},
                {id:2, body: 'quail'},
                {id:3, body: 'hen'},
                {id:4, body: 'hummingbirds'}
            ],
            rightAnswerId: 4
        },
        {
            body: 'which bird is known to be the fastest bird?',
            answers: [
                {id:1, body: 'falcon'},
                {id:2, body: 'sparrow'},
                {id:3, body: 'woodpecker'},
                {id:4, body: 'hen'}
            ],
            rightAnswerId: 1
        }
    ];

    const quiz = computed(() => {
        const max = questions.length - 1;
        const min = 0;
        const uniqueNumbers = new Set();
        while (uniqueNumbers.size < 5) {
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            uniqueNumbers.add(randomNumber);
        }
        return [...uniqueNumbers].map(index => questions[index])
    });

    return { questions, quiz };
});