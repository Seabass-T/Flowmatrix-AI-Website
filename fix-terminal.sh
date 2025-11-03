#!/bin/bash
# Terminal Fix Script for macOS
# Run this in your Mac Terminal app (not Cursor)

set -e

echo "🔧 Starting terminal repair..."

# Backup existing configs
BACKUP_DIR="$HOME/.terminal-backup-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP_DIR"
echo "📦 Backing up configs to: $BACKUP_DIR"

for file in .zshrc .zprofile .zshenv .bash_profile .bashrc; do
  if [ -f "$HOME/$file" ]; then
    cp "$HOME/$file" "$BACKUP_DIR/"
    echo "   ✓ Backed up $file"
  fi
done

# Create a proper .zshrc
echo "📝 Creating new .zshrc..."
cat > "$HOME/.zshrc" << 'EOF'
# FlowMatrix AI - Clean zsh config
# PATH setup
export PATH="$HOME/.local/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

# Homebrew (Apple Silicon)
if [ -x /opt/homebrew/bin/brew ]; then
  eval "$(/opt/homebrew/bin/brew shellenv)"
fi

# Homebrew (Intel)
if [ -x /usr/local/bin/brew ]; then
  eval "$(/usr/local/bin/brew shellenv)"
fi

# Node Version Manager
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" --no-use  # Load nvm

# Git prompt (optional)
autoload -Uz vcs_info
precmd() { vcs_info }
zstyle ':vcs_info:git:*' formats '%b '
setopt PROMPT_SUBST
PROMPT='%F{green}%~%f %F{blue}${vcs_info_msg_0_}%f$ '
EOF

echo "   ✓ Created ~/.zshrc"

# Keep existing .zprofile (it has Homebrew setup already)
echo "   ✓ Keeping existing ~/.zprofile (has Homebrew config)"

# Check if Homebrew is installed
if ! command -v brew &> /dev/null; then
  echo "🍺 Installing Homebrew..."
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  
  # Add Homebrew to PATH immediately
  if [ -x /opt/homebrew/bin/brew ]; then
    eval "$(/opt/homebrew/bin/brew shellenv)"
  fi
else
  echo "   ✓ Homebrew already installed: $(brew --version | head -n1)"
fi

# Check if Command Line Tools are installed
if ! xcode-select -p &> /dev/null; then
  echo "🛠️  Installing Xcode Command Line Tools..."
  xcode-select --install
  echo "   ⚠️  Please complete the installation dialog, then re-run this script"
  exit 0
else
  echo "   ✓ Xcode Command Line Tools installed"
fi

# Install nvm if not present
if [ ! -d "$HOME/.nvm" ]; then
  echo "📦 Installing nvm (Node Version Manager)..."
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
else
  echo "   ✓ nvm already installed"
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
fi

# Install Node LTS if not present
if ! command -v node &> /dev/null; then
  echo "📦 Installing Node.js LTS..."
  nvm install --lts
  nvm alias default lts/*
  nvm use default
else
  echo "   ✓ Node.js already installed: $(node -v)"
fi

echo ""
echo "✅ Terminal repair complete!"
echo ""
echo "📊 Current versions:"
echo "   Shell: $(zsh --version)"
echo "   Homebrew: $(brew --version | head -n1)"
echo "   Node: $(node -v)"
echo "   npm: $(npm -v)"
echo ""
echo "🔄 Next steps:"
echo "   1. Close and reopen your terminal (or run: source ~/.zshrc)"
echo "   2. Restart Cursor completely"
echo "   3. In Cursor, open Settings > Terminal and verify shell is set to: /bin/zsh"
echo ""
echo "💾 Your old configs are backed up in: $BACKUP_DIR"



