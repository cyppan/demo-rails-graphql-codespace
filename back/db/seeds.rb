# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

Post.upsert({ id: 1, title: 'The Essential Guide to Building Balanced Development Teams', rating: 5 })
Post.upsert({ id: 2, title: 'RAFT Explained – Part 1/3: Introduction to the Consensus Problem', rating: 4 })