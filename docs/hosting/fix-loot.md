---
sidebar_position: 3
---

# Fix End of battle Loot

At the end of the battles, the "salvage nodes" give often a No Loot Found error.  
To fix this, open the `cloud/data/default_platform_config.lua` file.  
Near the line 1315 there should be a function call to `DedicatedServcerServices_SetLootRules`.  
Modify the `CommonRanks_{n}_{n}` entries to `CommonRanks_{n}_{n}_v3` (add `_v3` at the end).  

**Old:**

```lua
	DedicatedServcerServices_SetLootRules(
	{
	-- ranks
	[1] = { common = { lt = "CommonRanks_1_3", iter = { 0 } }, rare = { lt = "RareT1", iter = { 3,5,12,12,12,12,12,12,12,30,50 } }, epic = { lt = "RareT1", iter = { 100000, 100000 } } },
	[2] = { common = { lt = "CommonRanks_1_3", iter = { 0 } }, rare = { lt = "RareT1", iter = { 4,3,11,11,11,11,11,11,11,30,50 } }, epic = { lt = "RareT1", iter = { 100000, 100000 } } },
	[3] = { common = { lt = "CommonRanks_1_3", iter = { 0 } }, rare = { lt = "RareT1", iter = { 5,4,10,10,10,10,10,10,10,30,50 } }, epic = { lt = "RareT1", iter = { 100000, 100000 } } },
	[4] = { common = { lt = "CommonRanks_4_6", iter = { 0 } }, rare = { lt = "RareT2", iter = { 6,12,12,14,12,14,12,14,12,30,50 } }, epic = { lt = "RareT2", iter = { 100000, 100000 } } },
	[5] = { common = { lt = "CommonRanks_4_6", iter = { 0 } }, rare = { lt = "RareT2", iter = { 7,11,13,12,15,12,14,12,13,30,50 } }, epic = { lt = "RareT2", iter = { 100000, 100000 } } },
	[6] = { common = { lt = "CommonRanks_4_6", iter = { 0 } }, rare = { lt = "RareT2", iter = { 8,10,12,15,12,12,15,12,12,30,50 } }, epic = { lt = "RareT2", iter = { 100000, 100000 } } },
	[7] = { common = { lt = "CommonRanks_7_8", iter = { 0 } }, rare = { lt = "RareT3Mono", iter = { 9,14,14,15,14,14,14,15,25,40,50 } }, epic = { lt = "RareT3", iter = { 100000, 100000 } } },
	[8] = { common = { lt = "CommonRanks_7_8", iter = { 0 } }, rare = { lt = "RareT3Mono", iter = { 10,15,14,15,15,14,15,15,26,40,50 } }, epic = { lt = "NeodiumDrop", iter = { 5,7,10,12,18,24,36,36,36,36 } } },
	[9] = { common = { lt = "CommonRanks_9_10", iter = { 0 } }, rare = { lt = "RareT3Mono", iter = { 11,14,15,14,14,15,14,18,29,40,50 } }, epic = { lt = "RareT3", iter = { 100000, 100000 } } },
	[10] = { common = { lt = "CommonRanks_9_10", iter = { 0 } }, rare = { lt = "RareT4Mono", iter = { 12,18,16,18,16,18,16,18,20,40,50 } }, epic = { lt = "RareT4", iter = { 100000, 100000 } } },
	[11] = { common = { lt = "CommonRanks_11_12", iter = { 0 } }, rare = { lt = "RareT4Mono", iter = { 13,17,17,18,17,18,17,18,20,40,50 } }, epic = { lt = "LezortiumDrop", iter = { 7,8,11,13,15,28,35,37,37,37 } } },
	[12] = { common = { lt = "CommonRanks_11_12", iter = { 0 } }, rare = { lt = "RareT4Mono", iter = { 14,16,18,16,18,17,18,19,20,40,50 } }, epic = { lt = "RareT4", iter = { 100000, 100000 } } },
	[13] = { common = { lt = "CommonRanks_13_15", iter = { 0 } }, rare = { lt = "RareT5Mono", iter = { 12,19,20,21,20,20,21,20,30,40,50 } }, epic = { lt = "RareT5", iter = { 100000, 100000 } } },
	[14] = { common = { lt = "CommonRanks_13_15", iter = { 0 } }, rare = { lt = "RareT5Mono", iter = { 13,20,21,20,20,22,20,23,32,40,50 } }, epic = { lt = "RareT5", iter = { 100000, 100000 } } },
	[15] = { common = { lt = "CommonRanks_13_15", iter = { 0 } }, rare = { lt = "RareT5Mono", iter = { 14,21,20,20,21,20,21,20,35,40,50 } }, epic = { lt = "RareT5", iter = { 100000, 100000 } } },
	}
	)
```

**Fixed:**

```lua
	DedicatedServcerServices_SetLootRules(
	{
	-- ranks
	[1] = { common = { lt = "CommonRanks_1_3_v3", iter = { 0 } }, rare = { lt = "RareT1", iter = { 3,5,12,12,12,12,12,12,12,30,50 } }, epic = { lt = "RareT1", iter = { 100000, 100000 } } },
	[2] = { common = { lt = "CommonRanks_1_3_v3", iter = { 0 } }, rare = { lt = "RareT1", iter = { 4,3,11,11,11,11,11,11,11,30,50 } }, epic = { lt = "RareT1", iter = { 100000, 100000 } } },
	[3] = { common = { lt = "CommonRanks_1_3_v3", iter = { 0 } }, rare = { lt = "RareT1", iter = { 5,4,10,10,10,10,10,10,10,30,50 } }, epic = { lt = "RareT1", iter = { 100000, 100000 } } },
	[4] = { common = { lt = "CommonRanks_4_6_v3", iter = { 0 } }, rare = { lt = "RareT2", iter = { 6,12,12,14,12,14,12,14,12,30,50 } }, epic = { lt = "RareT2", iter = { 100000, 100000 } } },
	[5] = { common = { lt = "CommonRanks_4_6_v3", iter = { 0 } }, rare = { lt = "RareT2", iter = { 7,11,13,12,15,12,14,12,13,30,50 } }, epic = { lt = "RareT2", iter = { 100000, 100000 } } },
	[6] = { common = { lt = "CommonRanks_4_6_v3", iter = { 0 } }, rare = { lt = "RareT2", iter = { 8,10,12,15,12,12,15,12,12,30,50 } }, epic = { lt = "RareT2", iter = { 100000, 100000 } } },
	[7] = { common = { lt = "CommonRanks_7_8_v3", iter = { 0 } }, rare = { lt = "RareT3Mono", iter = { 9,14,14,15,14,14,14,15,25,40,50 } }, epic = { lt = "RareT3", iter = { 100000, 100000 } } },
	[8] = { common = { lt = "CommonRanks_7_8_v3", iter = { 0 } }, rare = { lt = "RareT3Mono", iter = { 10,15,14,15,15,14,15,15,26,40,50 } }, epic = { lt = "NeodiumDrop", iter = { 5,7,10,12,18,24,36,36,36,36 } } },
	[9] = { common = { lt = "CommonRanks_9_10_v3", iter = { 0 } }, rare = { lt = "RareT3Mono", iter = { 11,14,15,14,14,15,14,18,29,40,50 } }, epic = { lt = "RareT3", iter = { 100000, 100000 } } },
	[10] = { common = { lt = "CommonRanks_9_10_v3", iter = { 0 } }, rare = { lt = "RareT4Mono", iter = { 12,18,16,18,16,18,16,18,20,40,50 } }, epic = { lt = "RareT4", iter = { 100000, 100000 } } },
	[11] = { common = { lt = "CommonRanks_11_12_v3", iter = { 0 } }, rare = { lt = "RareT4Mono", iter = { 13,17,17,18,17,18,17,18,20,40,50 } }, epic = { lt = "LezortiumDrop", iter = { 7,8,11,13,15,28,35,37,37,37 } } },
	[12] = { common = { lt = "CommonRanks_11_12_v3", iter = { 0 } }, rare = { lt = "RareT4Mono", iter = { 14,16,18,16,18,17,18,19,20,40,50 } }, epic = { lt = "RareT4", iter = { 100000, 100000 } } },
	[13] = { common = { lt = "CommonRanks_13_15_v3", iter = { 0 } }, rare = { lt = "RareT5Mono", iter = { 12,19,20,21,20,20,21,20,30,40,50 } }, epic = { lt = "RareT5", iter = { 100000, 100000 } } },
	[14] = { common = { lt = "CommonRanks_13_15_v3", iter = { 0 } }, rare = { lt = "RareT5Mono", iter = { 13,20,21,20,20,22,20,23,32,40,50 } }, epic = { lt = "RareT5", iter = { 100000, 100000 } } },
	[15] = { common = { lt = "CommonRanks_13_15_v3", iter = { 0 } }, rare = { lt = "RareT5Mono", iter = { 14,21,20,20,21,20,21,20,35,40,50 } }, epic = { lt = "RareT5", iter = { 100000, 100000 } } },
	}
	)
```
