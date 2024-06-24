import {STAGE_DISPLAY_SIZES} from '../lib/layout-constants.js';

const SET_STAGE_SIZE = 'scratch-gui/StageSize/SET_STAGE_SIZE';
const SET_COLFLEX = 'scratch-gui/StageSize/SET_COLFLEX';

const initialState = {
    stageSize: STAGE_DISPLAY_SIZES.large,
    colFlex: false
};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
    case SET_STAGE_SIZE:
        return {
            stageSize: action.stageSize
        };
    case SET_COLFLEX:
        return {
            colFlex: !state.colFlex
        };
    default:
        return state;
    }
};

const setStageSize = function (stageSize) {
    return {
        type: SET_STAGE_SIZE,
        stageSize: stageSize
    };
};
const setColFlex = function () {
    console.log('col flex action in reducer');
    return {
        type: SET_COLFLEX
    };
};

export {
    reducer as default,
    initialState as stageSizeInitialState,
    setStageSize,
    setColFlex
};
