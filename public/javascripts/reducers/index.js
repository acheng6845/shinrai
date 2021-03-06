import { combineReducers } from 'redux';
import navbarReducer from './navbarReducer';
import top_leaders from './topLeadersReducer';
import top_subs from './topSubsReducer';
import search from './searchBarReducer';
import select_monster from './selectMonsterReducer';
import slide from './slideReducer';
import tutorial from './tutorialReducer';

export default combineReducers({
	navbarReducer,
	top_leaders,
	top_subs,
	search,
	select_monster,
	slide,
	tutorial,
});