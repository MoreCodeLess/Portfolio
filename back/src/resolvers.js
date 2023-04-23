export const resolvers = {
    Query: {
        hello: () => {
            return 'Como estas?';
        },
        greet(root, { name }) {
            console.log(name)
            return `Hello! ${name} `;
        }
    }
};