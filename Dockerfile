FROM node:20-alpine AS builder

RUN apk add --no-cache git python3 make g++

WORKDIR /app

COPY . .

RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install --frozen-lockfile
RUN pnpm build

FROM node:20-alpine

RUN apk add --no-cache git python3 make g++

COPY --from=builder /app/packages/cli/dist /usr/local/lib/node_modules/n8n
COPY --from=builder /app/packages/editor-ui/dist /usr/local/lib/node_modules/n8n/editor-ui
COPY --from=builder /app/node_modules /usr/local/lib/node_modules/n8n/node_modules

WORKDIR /data
EXPOSE 5678

CMD ["n8n"]
