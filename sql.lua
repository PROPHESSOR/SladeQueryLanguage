-- Work in progress. Use sql.ts instead

function log(text)
  print(text)
end

function input(prompt)
  io.write(prompt)
  return io.read()
end

function process(query)
  log("Query: " .. query)
end

function length(list)
  return #list
end

function push(list, item)
  table.insert(list, item)
end

function printArray(list)
  for key, value in ipairs(list) do
    io.write(value .. ' ')
  end
end

function findAll(str, pattern)
  local last_index = 0
  local list = {}

  while true do
    local first, last, match = string.find(str, pattern, last_index)

    if not match then return list end

    push(list, match)
    last_index = last + 1
  end
end

local query = "select lines where id=1"

print()

-- log(printArray(findAll(query, "(%w+)")))

-- function tokenize(query)
--   local tokens = {}
  
-- end

-- process(input(">>> "))
