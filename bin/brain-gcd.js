#!/usr/bin/env node

import { greet, loop } from '../src/index.js';
import { questionWording, makeQA } from '../src/games/brain-gcd.js';

const playerName = greet();

loop(playerName, questionWording, makeQA);
