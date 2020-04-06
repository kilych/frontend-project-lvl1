#!/usr/bin/env node

import run from '../src/index.js';
import { questionWording, makeQA } from '../src/games/brain-gcd.js';

run(questionWording, makeQA);
