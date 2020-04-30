export const ADD_ENTITIES = 'add_entities';

export const addEntity = payload => {
    return {
        type: ADD_ENTITIES,
        payload,
    };
};
