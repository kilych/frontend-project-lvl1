#!/usr/bin/env node

import run from '../src/index.js';
import { questionWording, makeQA } from '../src/games/brain-prime.js';

run(questionWording, makeQA);
